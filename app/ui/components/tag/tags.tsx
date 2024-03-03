import Link from 'next/link';

interface TabProperty {
  id: '';
  name: '';
  href: '';
}

export const Tags = ({ tabProperties }: { tabProperties: TabProperty[] }) => {
  return (
    <ul className="tag-list">
      <li className="tag-default tag-pill tag-outline">realworld</li>
      <li className="tag-default tag-pill tag-outline">implementations</li>
    </ul>
  );
};
