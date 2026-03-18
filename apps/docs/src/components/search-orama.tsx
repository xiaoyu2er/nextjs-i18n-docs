'use client';

import {
  type OramaCloudOptions,
  useDocsSearch,
} from 'fumadocs-core/search/client';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
  TagsList,
  TagsListItem,
} from 'fumadocs-ui/components/dialog/search';
import { type ReactNode, useState } from 'react';

export interface OramaSearchDialogProps extends SharedProps {
  client: OramaCloudOptions['client'];
  searchOptions?: OramaCloudOptions['params'];
  index?: OramaCloudOptions['index'];
  footer?: ReactNode;
  defaultTag?: string;
  whereTag?: string;
  tags?: { name: string; value: string }[];

  /**
   * Add the "Powered by Orama" label
   *
   * @defaultValue false
   */
  showOrama?: boolean;

  /**
   * Allow to clear tag filters
   *
   * @defaultValue false
   */
  allowClear?: boolean;
}

/**
 * Orama Cloud integration
 */
export default function OramaSearchDialog({
  client,
  searchOptions,
  tags,
  defaultTag,
  whereTag,
  showOrama = false,
  allowClear = false,
  index,
  footer,
  ...props
}: OramaSearchDialogProps): ReactNode {
  const [tag, setTag] = useState(defaultTag);
  let where = {};
  if (whereTag) {
    where = {
      tag: [...new Set([tag, whereTag])],
    };
  }
  const { search, setSearch, query } = useDocsSearch(
    {
      type: 'orama-cloud',
      client,
      index,
      params: {
        where,
        ...searchOptions,
      },
    },
    undefined,
    tag,
  );

  useOnChange(defaultTag, (v) => {
    setTag(v);
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        {query.data !== 'empty' && query.data && (
          <SearchDialogList items={query.data} />
        )}
        <SearchDialogFooter className="flex flex-row">
          {tags ? (
            <TagsList tag={tag} onTagChange={setTag} allowClear={allowClear}>
              {tags.map(({ name, value }) => (
                <TagsListItem key={name} value={value}>
                  {name}
                </TagsListItem>
              ))}
            </TagsList>
          ) : null}
          {showOrama ? <Label /> : null}
          {footer}
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}

function Label(): ReactNode {
  return (
    <a
      href="https://orama.com"
      rel="noreferrer noopener"
      className="ms-auto text-xs text-fd-muted-foreground"
    >
      Search powered by Orama
    </a>
  );
}
