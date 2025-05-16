'use client';

import {
  type OramaCloudOptions,
  useDocsSearch,
} from 'fumadocs-core/search/client';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';
import {
  SearchDialog,
  type SharedProps,
  type TagItem,
  TagsList,
} from 'fumadocs-ui/components/dialog/search';
import { type ReactNode, useState } from 'react';

export interface OramaSearchDialogProps extends SharedProps {
  client: OramaCloudOptions['client'];
  searchOptions?: OramaCloudOptions['params'];
  index?: OramaCloudOptions['index'];
  footer?: ReactNode;
  defaultTag?: string;
  whereTag?: string;
  tags?: TagItem[];

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
  ...props
}: OramaSearchDialogProps): ReactNode {
  const [tag, setTag] = useState(defaultTag);
  let where = {};
  if (whereTag) {
    where = {
      tag: { in: [...new Set([tag, whereTag])] },
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
      results={query.data ?? []}
      isLoading={query.isLoading}
      {...props}
      footer={
        tags ? (
          <>
            <TagsList
              tag={tag}
              onTagChange={setTag}
              items={tags}
              allowClear={allowClear}
            >
              {showOrama ? <Label /> : null}
            </TagsList>
            {props.footer}
          </>
        ) : (
          props.footer
        )
      }
    />
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
