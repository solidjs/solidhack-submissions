import withSolid from 'rollup-preset-solid';
import gzipPlugin from 'rollup-plugin-gzip';

export default withSolid({
  input: 'src/index.ts',
  plugins: [gzipPlugin({ minSize: '2', gzipOptions: { level: 9 } })],
  printInstructions: true,
});
