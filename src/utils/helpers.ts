/**
 * General helper functions for Factory Design Hub.
 */

export const formatDate = (dateStr: string): string => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString();
};
