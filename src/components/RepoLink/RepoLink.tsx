import GithubSVG from '../assets/GithubSVG';

const RepoLink = () => {
  return (
    <a
      className="text-[#d2c4e7] flex items-center gap-2 rounded-xl text-center transition-colors duration-75 hover:text-[#e5d8f9]"
      href="https://github.com/aidasbui/slypitime"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Slypitime GitHub repository by aidasbui"
    >
      <GithubSVG aria-hidden="true" className="h-6 w-6" />
      aidasbui
    </a>
  );
};

export default RepoLink;
