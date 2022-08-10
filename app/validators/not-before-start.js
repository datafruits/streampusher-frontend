export default function notBeforeStart() {
  return (key, newValue, oldValue, changes, content) => {
    console.log('content');
    console.log(content);
    if(newValue > content.get('start')) {
      return true;
    } else {
      return 'end cannot be before start';
    }
  };
}
