interface TextNode {
    type: "text";
    value: string;
}

interface ElementNode {
    type: "element";
    tag: string;
    props: Record<string, any>;
    children: Array<TextNode | ElementNode>;
}

type BodyChild = TextNode | ElementNode;

interface Body {
    type: "root";
    children: BodyChild[];
}

interface TocEntry {
    id: string;
    depth: number;
    text: string;
}

export interface ItemData {
    slug: string;
    title: string;
    keywords?: string;
    Keywords?: string;
    text: string;
    bodyPlainText: string;
    createdAt: Date;
    updatedAt: Date;
    toc: TocEntry[];
    body: Body;
    meta?: Record<string, any>;
    path: string;
}

export interface ReducedItemData {
    slug: string;
    title: string;
    keywords?: string;
    bodyPlainText: string;
    url: string;
}

interface Collection {
    name: string;
    unindexedSortComparator: string;
    defaultLokiOperatorPackage: string;
    _dynamicViews: any[];
    uniqueNames: string[];
    transforms: Record<string, any>;
    rangedIndexes: Record<string, any>;
    _data: ItemData[];
}

export interface BlogResponse {
    _env: string;
    _serializationMethod: string;
    _autosave: boolean;
    _autosaveInterval: number;
    _collections: Collection[];
}