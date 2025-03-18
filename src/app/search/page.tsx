type SearchParamsKeys = 'q';

// [2]. 타입 정의
interface SearchPageProps {
  searchParams: Promise<{
    [key in SearchParamsKeys]: string;
  }>
}

// [3]. 서버 컴포넌트 경우에는 서버 측에서 사전 렌더링 되기 위해 딱 한번 실행 되므로 비동기 처리가 가능하다.
export default async function Search({ searchParams }: SearchPageProps) {
  /**
   * [1]. page의 props로 searchParams:Promise와 params:Promise가 전달된다.
   */
  
  const { q } = await searchParams;
  console.log({ q });

  return <div>Search</div>;
}