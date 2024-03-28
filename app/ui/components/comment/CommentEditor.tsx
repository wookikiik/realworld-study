import { Dispatch, SetStateAction } from 'react';
import { CommentForm } from '../form/CommentForm';

interface CommentEditorProps {
  slug: string;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
}
export const CommentEditor = ({ slug, setShouldFetch }: CommentEditorProps) => {
  return <CommentForm slug={slug} setShouldFetch={setShouldFetch} />;
};
