export function hideAccountNumber(accountNumber: string) {
  const secondHalf = accountNumber.substring(4, accountNumber.length);
  return '••••'.concat(secondHalf);
}

export function dateFormat(date: string) {
  const event = new Date(date);
  return event.toLocaleString('en-CA', { year: 'numeric', month: 'numeric', day: 'numeric' });
}

