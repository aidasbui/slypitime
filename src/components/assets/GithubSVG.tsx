import { SVGProps } from 'react';

type TGithubSVGProps = SVGProps<SVGSVGElement>;

const GithubSVG = ({ ...props }: TGithubSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        className="c"
        d="M22.73 6.77h-.75V5.64h-1.07V4.3h-1.79V2.77h-1.66V1.43H6.89v1.4h-1.8v1.53H3.3V5.7H2.23v1.07h-.58v10.57h.79v1.54h1.07v1.34H5.3v1.53h1.78v.99h10.16v-1.06h1.75v-1.53h1.79v-1.34h1.07v-1.46h.87V6.77Zm-2.79 11.75h-1.07v1.53h-1.79v.77h-2.29v-4.05h-.75v-.78h1.54v-.75h1.69v-.87h.81V9.53h-.8V6.36h-1.62v.78H8.4v-.82H6.78v3.21h-.79v4.84h.79v.87h1.56v.75h1.63v1.64H7.61v-.82h-.8v-.8H6v-.83h-.83v1.62h.81v.83h.8v.8h.78v.82h2.4v1.57H7.23v-.69H5.44V18.6H4.37v-1.34H3.28V7.32h.88V5.98h1.07V4.45h1.79v-1.4H17.2v1.34h1.79v1.53h1.07v1.34h1.05v9.92h-1.17v1.34Z"
      />
    </svg>
  );
};

export default GithubSVG;
