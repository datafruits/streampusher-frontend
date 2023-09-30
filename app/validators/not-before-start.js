export default function notBeforeStart() {
  return (key, newValue, oldValue, changes, content) => {
    console.log('content');
    console.log(content);
    console.log('new value');
    console.log(newValue);
    console.log('start');
    console.log(content.get('start'));
    if (newValue > content.get('start')) {
      return true;
    } else {
      return 'end cannot be before start';
    }
  };
}
