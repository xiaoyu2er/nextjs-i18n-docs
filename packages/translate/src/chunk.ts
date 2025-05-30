// Constants for token estimation
export const CHAR_TO_TOKEN_RATIO = 0.3; // 1 English character ≈ 0.3 token
export const CHAR_TO_TOKEN_RATIO_ZH = 0.5; // 1 Chinese character ≈ 0.5 token
export const MAX_INPUT_TOKENS = 64 * 1024; // DeepSeek's 64K context length
export const MAX_OUTPUT_TOKENS = 8 * 1024; // DeepSeek's 8K max output

// Chunk size constants (in estimated tokens)
export const MAX_CHUNK_SIZE_TOKENS = 16 * 1024; // Use smaller chunks for better translation quality

// Helper function to estimate tokens based on content
export function estimateTokens(content: string): number {
  // we use Chinese ratio because Chinese is concise
  return Math.ceil(content.length * CHAR_TO_TOKEN_RATIO_ZH);
}

export function needsChunking(content: string): boolean {
  return estimateTokens(content) > MAX_OUTPUT_TOKENS;
}

// Split text into chunks that respect markdown structure and heading hierarchy
export function splitIntoChunks(content: string): string[] {
  // Define a regex pattern for markdown headings (## Heading)
  const headingPattern = /^(#{2,}) /gm;

  // Split content by headings while keeping the headings with the content that follows
  const sections: string[] = [];
  let lastIndex = 0;

  // Find all heading matches
  const contentWithExtraLineBreak = `${content}\n\n`;
  const matches = Array.from(
    contentWithExtraLineBreak.matchAll(headingPattern),
  );

  if (matches.length > 0) {
    sections.push(content.substring(0, matches[0].index));
  } else {
    sections.push(content);
  }

  // Process each heading match
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const currentIndex = match.index !== undefined ? match.index : 0;

    // If this isn't the first heading, add the section between last heading and this one
    if (i > 0 && lastIndex < currentIndex) {
      sections.push(content.substring(lastIndex, currentIndex));
    }

    // Update lastIndex for next iteration
    lastIndex = currentIndex;

    // If this is the last heading, add the section from this heading to the end
    if (i === matches.length - 1) {
      sections.push(content.substring(lastIndex));
    }
  }

  // Further process sections to ensure they don't exceed token limits
  const chunks = [];
  let currentChunk = '';
  let currentTokens = 0;

  for (const section of sections) {
    const sectionTokens = estimateTokens(section);

    if (currentTokens + sectionTokens > MAX_OUTPUT_TOKENS) {
      // If adding this section would exceed the limit, start a new chunk
      chunks.push(currentChunk);
      currentChunk = section;
      currentTokens = sectionTokens;
    } else {
      currentChunk += section;
      currentTokens += sectionTokens;
    }
  }

  // Add any remaining content as the last chunk
  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks.filter((chunk) => chunk.trim() !== '');
}
