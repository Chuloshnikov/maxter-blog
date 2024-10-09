declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

declare type AdvertisementItemProps = {
  item: {
    _id: string;
    title: string;
    websiteUrl: string;
    coverUrl: string;
  }  
}