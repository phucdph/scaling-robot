import { useState } from 'react';

type UseProfileOptions = {};

const useProfile = (options: UseProfileOptions) => {
  console.log(options);
  const [profile] = useState();
  return [profile] as const;
}

export default useProfile;