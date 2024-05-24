"use client"
// component that accepts .json file as one input with out any external libraries

import { ChangeEvent } from 'react';

export default function FileInput({
  onChange,
}: Readonly<{
  onChange: (data: string) => void;
}>) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onload = () => {
      onChange(reader.result as string);
    };
    reader.readAsText(event.target.files?.[0] as Blob);
  }

  return (
    <input
      type="file"
      accept=".json"
      onChange={handleChange}
    />
  );
}