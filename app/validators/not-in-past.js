export default function notInPast() {
  return (key, newValue /*, oldValue, changes, content*/) => {
    const now = new Date();
    if (newValue > now) {
      return true;
    } else {
      return `${key} cannot be in the past`;
    }
  };
}
