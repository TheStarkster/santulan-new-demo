/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    canCounsellor: currentUser && currentUser.access === 'counsellor',
    canCTM: currentUser && currentUser.access === 'ctm',
  };
}
