import { defineEventHandler } from 'h3';
import * as tencentcloud from 'tencentcloud-sdk-nodejs-lighthouse';
import 'dotenv/config';

const LighthouseClient = tencentcloud.lighthouse.v20200324.Client;
const clientConfig = {
  credential: {
    secretId: process.env.TENCENTCLOUD_SECRET_ID,
    secretKey: process.env.TENCENTCLOUD_SECRET_KEY,
  },
  region: 'ap-tokyo',
  profile: {
    httpProfile: {
      endpoint: 'lighthouse.tencentcloudapi.com',
    },
  },
};

const client = new LighthouseClient(clientConfig);
const params = {
  InstanceIds: process.env.TENCENTCLOUD_INSTANCE_ID
    ? [process.env.TENCENTCLOUD_INSTANCE_ID]
    : undefined,
};

interface Instance {
  ExpiredTime?: string | null;
  [key: string]: any;
}

interface DescribeInstancesResponse {
  InstanceSet?: Instance[];
  ExpiredTime?: string | null;
  [key: string]: any;
}

function formatDateOnly(value: string | undefined | null): string | undefined | null {
  if (!value) return value;
  const m = String(value).match(/^(\d{4}-\d{2}-\d{2})/);
  if (m) return m[1];
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  const y = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${mm}-${dd}`;
}

function formatDateChinese(value: string | undefined | null): string | undefined | null {
  if (!value) return value;
  const m = String(value).match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
  if (m) {
    const y = m[1];
    const mm = String(m[2]).padStart(2, '0');
    const dd = String(m[3]).padStart(2, '0');
    return `${y}年${mm}月${dd}日`;
  }
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  const y = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}年${mm}月${dd}日`;
}

export default defineEventHandler(async () => {
  try {
    const data: DescribeInstancesResponse = await client.DescribeInstances(params);
    const messages: Array<string | null> = [];

    if (data && Array.isArray(data.InstanceSet) && data.InstanceSet.length > 0) {
      data.InstanceSet.forEach((inst: Instance) => {
        const dateChinese = formatDateChinese(inst.ExpiredTime) ?? null;
        messages.push(dateChinese);
      });
      const dates = messages.filter((m): m is string => m !== null);
      return dates.join(', ');
    }

    if (data && data.ExpiredTime) {
      return formatDateChinese(data.ExpiredTime) ?? '';
    }

    // fallback: return raw data as string
    try {
      return JSON.stringify(data);
    } catch (e) {
      return String(data);
    }
  } catch (err: unknown) {
    return {
      error: '查询失败',
      details: err instanceof Error ? err.message : String(err),
    };
  }
});