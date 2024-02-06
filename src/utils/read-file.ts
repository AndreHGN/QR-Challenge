export const readFileAsDataURL = (file: File) => {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const fileUrl = reader.result;
      resolve(fileUrl as string);
    };

    reader.onerror = () => {
      throw new Error(`Error occurred when reading file: ${file.name}`);
    };
  });
};
