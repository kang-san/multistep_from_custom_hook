import React from "react";
import { FormWrapper } from "./FormWrapper";
import { useTranslation } from "react-i18next"

// type UserData = {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

interface UserData {
  firstName: string;
  lastName: string;
  age: number;
}

// type UserFormProps = UserData & {
//   updateFields: (fields: Partial<UserData>) => void;
// }

interface UserFormProps extends UserData {
  updateFields: (fields: Partial<UserData>) => void;
}

export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  const { t } = useTranslation(['common']);

  return (
    <FormWrapper title={t('title')}>
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e=> updateFields({firstName: e.target.value})}
      ></input>
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e=> updateFields({lastName: e.target.value})}
      ></input>
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={e=> updateFields({age: parseInt(e.target.value)})}
      ></input>
    </FormWrapper>
  )
}
