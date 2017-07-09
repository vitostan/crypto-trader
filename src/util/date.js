import moment from 'moment-timezone';

export function now() {
  return moment(new Date()).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss(z)');
}