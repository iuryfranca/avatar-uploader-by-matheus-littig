import { createContext, Dispatch, useContext, useState } from 'react';
import html2canvas from 'html2canvas';

export type AvatarPic = {
  src: string;
  alt: string;
  size: number[];
};

export type Steep = {
  steep_1: boolean;
  steep_2: boolean;
  error: boolean;
};

type HomeContextData = {
  avatarPic: AvatarPic;
  steep: Steep;
  setAvatarPic: Dispatch<AvatarPic>;
  onChangePic(event: any): void;
  resetContext(): void;
  saveImage(): void;
};

export const HomeContext = createContext({} as HomeContextData);

export const HomeProvider: React.FC = ({ children }) => {
  const [avatarPic, setAvatarPic] = useState<AvatarPic>({
    src: '',
    alt: '',
    size: [0],
  });
  const [steep, setSteep] = useState<Steep>({
    steep_1: true,
    steep_2: false,
    error: false,
  });

  function onChangePic(event: any) {
    const [file]: any = event.target.files;
    const file_ext = file.name.slice(file.name.length - 5);
    if (
      !file_ext.includes('png') &&
      !file_ext.includes('jpg') &&
      !file_ext.includes('jpeg') &&
      !file_ext.includes('svg')
    ) {
      return setSteep({ ...steep, steep_1: false, error: true });
    }
    if (file) {
      setAvatarPic({
        src: URL.createObjectURL(file),
        alt: file.name,
        size: [100],
      });
      return setSteep({ ...steep, steep_1: false, steep_2: true });
    }
  }

  async function saveImage() {
    // TO-DO: verify a way to do it without using html2canvas
    const image = await html2canvas(document.getElementById('avatar')).then(
      canvas => canvas.toDataURL(),
    );

    await downloadImage(image);

    return (
      setAvatarPic({
        alt: 'user-profile image',
        src: image,
        size: [100],
      }),
      setSteep({ ...steep, steep_2: false, steep_1: true })
    );
  }

  function resetContext() {
    setAvatarPic({
      src: '',
      alt: '',
      size: [0],
    });
    setSteep({
      steep_1: true,
      steep_2: false,
      error: false,
    });
  }

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'AvatarPic';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <HomeContext.Provider
      value={{
        avatarPic,
        steep,
        setAvatarPic,
        saveImage,
        onChangePic,
        resetContext,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }

  return context;
};
