'use client';

import FileInput from '@/components/inputs/FileInput';
import { ReactMarkdown } from '@/components/markdown/ReactMarkdown';
import { diffOpenapiObject } from '@/features/openapiDiff/module/diffOpenapiObject';
import { parseOpenapiJson } from '@/features/openapiDiff/module/parseOpenapiJson';
import { OpenapiTypes } from '@/features/openapiDiff/types/openapiTypes';
import { useRef, useState } from 'react';

const ScreenOpenapiDiff = () => {
  const [startObj, setStartObj] = useState<OpenapiTypes | null>(null);
  const [targetObj, setTargetObj] = useState<OpenapiTypes | null>(null);

  const parentRef = useRef<HTMLDivElement>(null);

  const canDiff = startObj && targetObj;
  const diff = canDiff ? diffOpenapiObject(startObj, targetObj) : null;

  return (
    <div>
      <p>Starting File</p>
      <FileInput
        onChange={(data) => {
          const parsedObj = parseOpenapiJson(data);
          setStartObj(parsedObj);
        }}
      />
      <p>Target File</p>
      <FileInput
        onChange={(data) => {
          const parsedObj = parseOpenapiJson(data);
          setTargetObj(parsedObj);
        }}
      />
      <p>Diff</p>
      {/* <pre>{JSON.stringify(diff, null, 2)}</pre> */}
      {/* {diff &&
        Object.entries(diff.paths).map(([key, value]) => {
          return (
            <div key={key}>
              <hr />
              <div className=" border-gray-200 p-3 m-3 bg-slate-800">
                <p className="text-xl text-yellow-500">{key}</p>
              </div>
              <pre>{JSON.stringify(value, null, 2)}</pre>
            </div>
          );
        })} */}
      <div ref={parentRef} />
      <ReactMarkdown
        parentRef={parentRef}
        markdown={`
## Openapi Diff

### Paths

        ${
          diff &&
          Object.entries(diff.paths)
            .map(([key, value]) => {
              return `
#### ${key}

${JSON.stringify(value, null, 2)}
            `;
            })
            .join('\n')
        }
        `}
      />
    </div>
  );
};

export default ScreenOpenapiDiff;
