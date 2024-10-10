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

declare type ProfileItemProps = {
  item: {
    _id?: FormDataEntryValue;
    email: string;
    username: string;
    displayName: string;
    bio: string;
    avatarUrl: string;
    coverUrl: string;
    admin: boolean;
    createdAt: Date;
  }  
}