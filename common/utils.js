import { notification } from "antd";

export const showError = (body) => {
  const { response } = body || {};
  const { data } = response || {};
  const { message } = data || {};
  notification.error({ message });
};
