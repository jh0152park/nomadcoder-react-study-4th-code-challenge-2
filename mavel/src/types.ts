interface IThumbnail {
    path: string;
    extension: string;
}

interface IComicItem {
    resourceURI: string;
    name: string;
}

interface ISeriesItem {
    resourceURI: string;
    name: string;
}

interface IComics {
    available: number;
    collectionURI: string;
    items: IComicItem[];
    returned: number;
}

interface ISeries {
    available: number;
    collectionURI: string;
    items: ISeriesItem[];
    returned: number;
}

interface IStoryItem {
    resourceURI: string;
    name: string;
    type: string;
}

interface IStories {
    available: number;
    collectionURI: string;
    items: IStoryItem[];
    returned: number;
}

interface IEventItem {
    resourceURI: string;
    name: string;
}

interface IEvents {
    available: number;
    collectionURI: string;
    items: IEventItem[];
    returned: number;
}

interface IUrls {
    type: string;
    url: string;
}

interface ICharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: IThumbnail;
    resourceURI: string;
    comics: IComics;
    series: ISeries;
    stories: IStories;
    events: IEvents;
    urls: IUrls[];
}

export interface IEntireCharacterResponse {
    data: {
        data: {
            results: ICharacter[];
        };
    };
}

export interface ICharacterDetail {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: IThumbnail;
    resourceURI: string;
    comics: IComics;
    series: ISeries;
    stories: IStories;
    events: IEvents;
    urls: IUrls[];
}

export interface ICharacterDetailResponse {
    data: {
        data: {
            results: ICharacterDetail[];
        };
    };
}
