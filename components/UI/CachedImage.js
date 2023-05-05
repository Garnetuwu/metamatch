import * as FileSystem from "expo-file-system";
import { useLayoutEffect, useState } from "react";
import shorthash from "shorthash";
import { Image } from "react-native";

export default CachedImage = ({ source, style, resizeMode }) => {
  const { uri } = source;
  const cacheKey = shorthash.unique(uri);
  const [imageSource, setSource] = useState(null);

  useLayoutEffect(() => {
    const loadImg = async () => {
      const filePath = `${FileSystem.cacheDirectory}${cacheKey}`;
      let localImage = await FileSystem.getInfoAsync(filePath);
      if (localImage.exists) {
        // console.log("read image from cache");
        setSource({ uri: localImage.uri });
      } else {
        const newImage = await FileSystem.downloadAsync(uri, filePath);
        // console.log("downloaded image to cache");
        setSource({ uri: newImage.uri });
      }
    };
    loadImg();
  }, [source]);

  return (
    <>
      {imageSource && (
        <Image style={style} resizeMode={resizeMode} source={imageSource} />
      )}
    </>
  );
};
