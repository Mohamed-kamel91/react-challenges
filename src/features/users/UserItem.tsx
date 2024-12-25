import { forwardRef, useMemo } from 'react';

import { Box } from '@components';
import { User } from './types';

type UserItemProps = {
  user: User;
};

export const UserItem = forwardRef<
  HTMLDivElement,
  UserItemProps
>(({ user }: UserItemProps, ref) => {
  const { name, birth_year, gender } = user;

  return (
    <Box
      ref={ref}
      borderWidth={2}
      borderColor="#ede9fe"
      radius={12}
      style={{ minHeight: 200, marginBottom: 20, padding: 20 }}
    >
      <UserInfo
        name={name}
        birthday={birth_year}
        gender={gender}
      />
    </Box>
  );
});

type UserInfoProps = {
  name: string;
  birthday: string;
  gender: string;
};

const UserInfo = ({ name, birthday, gender }: UserInfoProps) => {
  const info = useMemo(
    () => [
      { label: 'Name', info: name },
      { label: 'Birthday', info: birthday },
      { label: 'Gender', info: gender },
    ],
    [birthday, gender, name]
  );

  return info.map((item) => (
    <div key={item.label} className="mb-2 last:mb-0">
      <h2 className="mb-1 text-base font-semibold text-neutral-700">
        {item.label}
      </h2>
      <p className="text-sm text-neutral-700">{item.info}</p>
    </div>
  ));
};
