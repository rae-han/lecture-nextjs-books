

type DeepRequire<T> = keyof T extends never
  ? T
  : {
      [Key in keyof T]-?: DeepRequire<T[Key]>;
    };

// type DeepRequire<T> = keyof T extends object
//   ? {
//       [Key in keyof T]-?: DeepRequire<T[Key]>;
//     }
//   : T;

type User = {
  id?: number;
  name?: string;
  settings?: {
    theme?: string;
    notifications?: boolean;
  };
};

const user: DeepRequire<User> = {
  id: 1, 
  name: 'Alice',
  settings: {
    theme: 'dark',
    notifications: true,
  },
};

user.settings.theme = undefined; // ❌ 오류 발생해야 함

type test1 = keyof string extends never ? true : false;
type KeyOfTypeExtendsNever1<T> = keyof T extends never ? true : false;
type KeyOfTypeExtendsNever2<T> = keyof T extends never ? T : {[Key in keyof T]: T[Key]};
type test2 = KeyOfTypeExtendsNever1<string>;
type test3 = KeyOfTypeExtendsNever1<{ key1: string, key2: number }>;
type test4 = KeyOfTypeExtendsNever2<string>;
type test5 = KeyOfTypeExtendsNever2<{ key1: string, key2: number }>;

type Recursion<T> = keyof T extends never ? T : {
  [Key in keyof T]: Recursion<T[Key]>;
};

type RecursionUser = Recursion<User>;

type DeepMutable<T> = keyof T extends never
  ? T
  : {
      -readonly [Key in keyof T]: DeepMutable<T[Key]>;
    };

type ImmutableUser = {
  readonly id: number;
  readonly name: string;
  readonly settings: {
    readonly theme: string;
    readonly notifications: boolean;
  };
};

const immutableUser: DeepMutable<ImmutableUser> = {
  id: 1,
  name: 'Alice',
  settings: {
    theme: 'dark',
    notifications: true,
  },
};

immutableUser.id = 2; // ✅ 정상적으로 변경 가능해야 함
immutableUser.settings.theme = 'light'; // ✅ 정상적으로 변경 가능해야 함

type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [Key in keyof T]: DeepReadonly<T[Key]>;
    };

type ReadonlyUser = {
  id: number;
  name: string;
  settings: {
    theme: string;
    notifications: boolean;
  };
};

const readonlyUser: DeepReadonly<ReadonlyUser> = {
  id: 1,
  name: 'Alice',
  settings: {
    theme: 'dark',
    notifications: true,
  },
};

readonlyUser.id = 2; // ❌ 오류 발생해야 함
readonlyUser.settings.theme = 'light'; // ❌ 오류 발생해야 함

type DeepPartial<T> = keyof T extends never
  ? T
  : {
      [Key in keyof T]?: DeepPartial<T[Key]>;
    };

type PartialUser = {
  id: number;
  name: string;
  settings: {
    theme: string;
    notifications: boolean;
  };
};

const partialUser: DeepPartial<PartialUser> = {
  name: 'Alice',
  settings: {
    theme: 'dark',
  },
}; // ✅ 오류 없이 정상적으로 작동해야 함

console.log({ partialUser });

// type IsString<T> = [T] extends [string] ? true : false;
// type Result = IsString<string | number>; // false

type IsNever<T> = T extends never ? true : false
type Result = IsNever<never>

type WrapInArray0<T> = T extends string ? T[] : T;


// 함수에서 사용
function processValue1<T>(value: T): WrapInArray0<T> {
  if (typeof value === "string") {
    return [value] as WrapInArray0<T>; // 문자열은 배열로 반환
  }
  return value as WrapInArray0<T>; // 숫자는 그대로 반환
}

// 사용 예시
const result1 = processValue1("hello"); // result1: string[]
const result2 = processValue1(42);      // result2: number

type SameType<T> = T extends string ? T : T;

function testFunc<T>(param: T) {
  const testValue: SameType<T> = param;
  // Type 'T' is not assignable to type 'SameType<T>'.
}

