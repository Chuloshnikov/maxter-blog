import { redirect } from 'next/navigation';

//there is no Categories directory in project, redirecting to dashboard

export default function CategoriesRedirect() {
  redirect('/admin');
}