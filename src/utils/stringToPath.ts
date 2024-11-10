import compact from '@/utils/compact';

export default (input: string): string[] =>
  compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
