

const Link = ({ href, className, children }) => {
  return (
    <a
      className={className}
      href={href}
      onClick={evt => {
        if (evt.metaKey || evt.ctrlKey) {
          return;
        }

        evt.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
      }}>
      {children}
    </a>
  );
}

export default Link;
