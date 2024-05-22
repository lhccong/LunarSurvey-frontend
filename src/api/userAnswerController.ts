// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** 创建用户答题记录 POST /api/userAnswer/add */
export async function addUserAnswerUsingPost(
  body: API.UserAnswerAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/userAnswer/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户答题记录 POST /api/userAnswer/delete */
export async function deleteUserAnswerUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userAnswer/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑用户答题记录（给用户使用） POST /api/userAnswer/edit */
export async function editUserAnswerUsingPost(
  body: API.UserAnswerEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userAnswer/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 id 获取用户答题记录（封装类） GET /api/userAnswer/get/vo */
export async function getUserAnswerVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserAnswerVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserAnswerVO_>('/api/userAnswer/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取用户答题记录列表（仅管理员可用） POST /api/userAnswer/list/page */
export async function listUserAnswerByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserAnswer_>('/api/userAnswer/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取用户答题记录列表（封装类） POST /api/userAnswer/list/page/vo */
export async function listUserAnswerVoByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserAnswerVO_>('/api/userAnswer/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取当前登录用户创建的用户答题记录列表 POST /api/userAnswer/my/list/page/vo */
export async function listMyUserAnswerVoByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserAnswerVO_>('/api/userAnswer/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户答题记录（仅管理员可用） POST /api/userAnswer/update */
export async function updateUserAnswerUsingPost(
  body: API.UserAnswerUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userAnswer/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
