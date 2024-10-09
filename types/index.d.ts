declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

declare type AdvertisementItemProps = {
  item: {
    _id?: FormDataEntryValue;
    title: string;
    websiteUrl: string;
    coverUrl: string;
  }  
}