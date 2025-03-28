'use client';

const Error = ({ error, reset }: { error: Error, reset: () => void }) => {
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <p>{error.message}</p>
      <button onClick={() => reset()}>
        다시 시도
      </button>
    </div>
  );
}
export default Error;