import React, { FunctionComponent, useEffect, useRef } from 'react';

interface IDangerousInnerHtmlProps {
  html: string;
}

export const DangerousInnerHtml: FunctionComponent<IDangerousInnerHtmlProps> = (props) => {
  const { html } = props;
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const slotHtml = document.createRange().createContextualFragment(html);
      divRef.current.innerHTML = '';
      divRef.current.appendChild(slotHtml);
    }
  }, [html])


  return (
    <div ref={divRef}></div>
  )
}