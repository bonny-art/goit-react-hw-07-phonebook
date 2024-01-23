import { MutatingDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <MutatingDots
        type="MutatingDots"
        color="#788cde"
        height={80}
        width={80}
        timeout={1000}
        secondaryColor="#eb4e4e"
      />
    </LoaderContainer>
  );
};
