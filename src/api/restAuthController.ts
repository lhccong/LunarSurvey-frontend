// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** 获取GitHub授权地址重定向 GET /api/oauth/render */
export async function renderAuthUsingGet(options?: { [key: string]: any }) {
  return request<any>('/api/oauth/render', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取GitHub授权地址重定向 PUT /api/oauth/render */
export async function renderAuthUsingPut(options?: { [key: string]: any }) {
  return request<any>('/api/oauth/render', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 获取GitHub授权地址重定向 POST /api/oauth/render */
export async function renderAuthUsingPost(options?: { [key: string]: any }) {
  return request<any>('/api/oauth/render', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取GitHub授权地址重定向 DELETE /api/oauth/render */
export async function renderAuthUsingDelete(options?: { [key: string]: any }) {
  return request<any>('/api/oauth/render', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 获取GitHub授权地址重定向 PATCH /api/oauth/render */
export async function renderAuthUsingPatch(options?: { [key: string]: any }) {
  return request<any>('/api/oauth/render', {
    method: 'PATCH',
    ...(options || {}),
  });
}
