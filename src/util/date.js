import moment from 'moment-timezone';

export function now() {
  let datetime = new Date();
  return moment(datetime).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss(z)');
}