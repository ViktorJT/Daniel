const cleanProject = (project) => {
  const { id, title, director, client, featured, assets, slug } = project;

  const featuredWidth = featured.videoWidth || featured.width; 
  const featuredHeight = featured.videoHeight || featured.height;
  const featuredIsLandscape = featuredWidth > featuredHeight;
  const featuredAspectRatio = {
    height: featuredHeight / featuredWidth,
    width: featuredWidth / featuredHeight,
  }

  const cleanFeatured = {
    url: featured.url,
    id: featured.id,
    height: featuredHeight,
    width: featuredWidth, 
    mimeType: featured.mimeType,
    isLandscape: featuredIsLandscape,
    aspectRatio: featuredAspectRatio,
    title,
    director,
    client,
    slug
  };

  const cleanAssets = assets.map(asset => {
    const width = asset.videoWidth || asset.width;
    const height = asset.videoHeight || asset.height;


    const isLandscape = width > height;
    const aspectRatio = {
      height: height / width,
      width: width / height
    }
      
    return ({
      url: asset.url,
      id: asset.id,
      mimeType: asset.mimeType,
      height,
      width,
      aspectRatio,
      isLandscape 
    })
  })

  return {
    id,
    slug,
    title,
    director,
    client,
    featured: cleanFeatured,
    assets: cleanAssets,
  };
};

export default cleanProject;
