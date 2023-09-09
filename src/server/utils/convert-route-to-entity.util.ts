const mapping: Record<string, string> = {
  activities: 'activity',
  customers: 'customer',
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
