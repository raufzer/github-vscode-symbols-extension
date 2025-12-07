export interface IconMapping {
    [key: string]: string;
}

// File extension to icon name mapping
export const fileExtensionMap: IconMapping = {
    // TypeScript
    'ts': 'ts',
    'tsx': 'react-ts',
    'mts': 'ts',
    'cts': 'ts',

    // JavaScript
    'js': 'js',
    'jsx': 'react',
    'mjs': 'js',
    'cjs': 'js',

    // Web frameworks & libraries
    'vue': 'vue',
    'svelte': 'svelte',
    'astro': 'astro',

    // Markup & Styling
    'html': 'code-orange',
    'htm': 'code-orange',
    'css': 'code-purple',
    'scss': 'sass',
    'sass': 'sass',
    'less': 'code-purple',
    'styl': 'stylus',
    'pcss': 'postcss',

    // Config & Data
    'json': 'brackets-yellow',  // Changed from 'json' to 'brackets-yellow'
    'jsonc': 'brackets-yellow',
    'json5': 'brackets-yellow',
    'yaml': 'yaml',
    'yml': 'yaml',
    'toml': 'gear',
    'xml': 'xml',
    'csv': 'csv',
    'ini': 'gear',
    'conf': 'gear',

    // Documentation
    'md': 'markdown',
    'mdx': 'mdx',
    'markdown': 'markdown',
    'txt': 'text',
    'pdf': 'pdf',
    'doc': 'document',
    'docx': 'document',

    // Programming Languages
    'py': 'python',
    'pyc': 'python',
    'pyd': 'python',
    'pyw': 'python',
    'pyx': 'python',
    'pyz': 'python',
    'rb': 'ruby',
    'erb': 'ruby',
    'php': 'php',
    'java': 'java',
    'class': 'java',
    'jar': 'java',
    'kt': 'kotlin',
    'kts': 'kotlin',
    'swift': 'swift',
    'go': 'go',
    'rs': 'rust',
    'c': 'c',
    'cpp': 'cplus',
    'cc': 'cplus',
    'cxx': 'cplus',
    'h': 'h',
    'hpp': 'cplus',
    'hh': 'cplus',
    'hxx': 'cplus',
    'cs': 'csharp',
    'csx': 'csharp',
    'fs': 'fsharp',
    'fsx': 'fsharp',
    'fsi': 'fsharp',
    'ex': 'elixir',
    'exs': 'elixir',
    'eex': 'elixir',
    'heex': 'elixir',
    'erl': 'erlang',
    'hrl': 'erlang',
    'lua': 'lua',
    'luau': 'luau',
    'v': 'v',
    'zig': 'zig',
    'nim': 'nim',
    'nims': 'nim',
    'cr': 'crystal',
    'scala': 'scala',
    'sc': 'scala',
    'clj': 'clojure',
    'cljs': 'clojure',
    'cljc': 'clojure',
    'dart': 'dart',
    'jl': 'julia',
    'r': 'r',
    'rmd': 'r',
    'pl': 'perl',
    'pm': 'perl',
    'perl': 'perl',
    'coffee': 'coffeescript',
    'litcoffee': 'coffeescript',
    'f': 'fortran',
    'f90': 'fortran',
    'f95': 'fortran',
    'ml': 'ocaml',
    'mli': 'ocaml',
    'hs': 'haskell',
    'lhs': 'haskell',
    'sql': 'database',
    'db': 'database',
    'sqlite': 'database',

    // Shell & Scripts
    'sh': 'shell',
    'bash': 'shell',
    'zsh': 'shell',
    'fish': 'shell',
    'bat': 'shell',
    'cmd': 'shell',
    'ps1': 'shell',

    // Media
    'svg': 'svg',
    'png': 'image',
    'jpg': 'image',
    'jpeg': 'image',
    'gif': 'gif',
    'webp': 'image',
    'ico': 'image',
    'bmp': 'image',
    'tiff': 'image',
    'mp3': 'audio',
    'wav': 'audio',
    'ogg': 'audio',
    'flac': 'audio',
    'm4a': 'audio',
    'mp4': 'video',
    'webm': 'video',
    'avi': 'video',
    'mov': 'video',
    'mkv': 'video',
    'woff': 'font',
    'woff2': 'font',
    'ttf': 'font',
    'otf': 'font',
    'eot': 'font',

    // Build & Config
    'proto': 'proto',
    'graphql': 'graphql',
    'gql': 'graphql',
    'prisma': 'prisma',
    'tf': 'terraform',
    'tfvars': 'terraform',
    'tfstate': 'terraform',
    'gradle': 'gradle',
    'cmake': 'cmake',
    'make': 'gear',
    'sbt': 'sbt',

    // Lock files
    'lock': 'lock',

    // Templates
    'twig': 'twig',
    'pug': 'pug',
    'jade': 'pug',
    'haml': 'haml',
    'liquid': 'liquid',
    'njk': 'nunjucks',
    'nunjucks': 'nunjucks',

    // Other
    'exe': 'exe',
    'dll': 'exe',
    'so': 'exe',
    'dylib': 'exe',
    'wasm': 'gear',
    'ipynb': 'notebook',
    'patch': 'patch',
    'diff': 'patch',
    'tex': 'tex',
    'latex': 'tex',
    'drawio': 'drawio',
    'sol': 'solidity',
    'pkl': 'pkl',
    'cu': 'cuda',
    'cuh': 'cuda',
    'http': 'http',
    'rest': 'http',
};

// Filename to icon name mapping (exact matches)
export const fileNameMap: IconMapping = {
    // Config files
    '.editorconfig': 'editorconfig',
    '.gitignore': 'ignore',
    '.gitattributes': 'git',
    '.gitmodules': 'git',
    '.gitkeep': 'git',
    '.dockerignore': 'docker',
    '.eslintignore': 'ignore',
    '.prettierignore': 'ignore',
    '.npmignore': 'ignore',
    '.env': 'gear',
    '.env.local': 'gear',
    '.env.development': 'gear',
    '.env.production': 'gear',
    '.env.test': 'gear',
    '.env.example': 'gear',
    '.envrc': 'gear',

    // Package managers
    'package.json': 'node',
    'package-lock.json': 'npm',
    'npm-shrinkwrap.json': 'npm',
    'yarn.lock': 'yarn',
    '.yarnrc': 'yarn',
    '.yarnrc.yml': 'yarn',
    'pnpm-lock.yaml': 'pnpm',
    'pnpm-workspace.yaml': 'pnpm',
    '.pnpmfile.cjs': 'pnpm',
    'bun.lockb': 'bun',
    'bunfig.toml': 'bun',
    'deno.json': 'deno',
    'deno.jsonc': 'deno',
    'deno.lock': 'deno',

    // Build tools
    'webpack.config.js': 'webpack',
    'webpack.config.ts': 'webpack',
    'webpack.config.mjs': 'webpack',
    'webpack.config.cjs': 'webpack',
    'webpack.dev.js': 'webpack',
    'webpack.prod.js': 'webpack',
    'vite.config.js': 'vite',
    'vite.config.ts': 'vite',
    'vite.config.mjs': 'vite',
    'vitest.config.js': 'vitest',
    'vitest.config.ts': 'vitest',
    'rollup.config.js': 'gear',
    'rollup.config.ts': 'gear',
    'gulpfile.js': 'gulp',
    'gulpfile.ts': 'gulp',
    'gruntfile.js': 'gear',
    'gruntfile.ts': 'gear',
    'tsconfig.json': 'tsconfig',
    'tsconfig.base.json': 'tsconfig',
    'tsconfig.build.json': 'tsconfig',
    'tsconfig.node.json': 'tsconfig',
    'jsconfig.json': 'brackets-yellow',
    'babel.config.js': 'babel',
    'babel.config.json': 'babel',
    '.babelrc': 'babel',
    '.babelrc.js': 'babel',
    '.babelrc.json': 'babel',
    'swc.config.js': 'swc',
    '.swcrc': 'swc',
    'rspack.config.js': 'rspack',
    'rsbuild.config.js': 'rsbuild',
    'rslib.config.js': 'rslib',

    // Framework configs
    'next.config.js': 'next',
    'next.config.ts': 'next',
    'next.config.mjs': 'next',
    'next-env.d.ts': 'next',
    'nuxt.config.js': 'nuxt',
    'nuxt.config.ts': 'nuxt',
    'gatsby-config.js': 'gatsby',
    'gatsby-config.ts': 'gatsby',
    'gatsby-node.js': 'gatsby',
    'astro.config.js': 'astro',
    'astro.config.mjs': 'astro',
    'astro.config.ts': 'astro',
    'svelte.config.js': 'svelte',
    'svelte.config.ts': 'svelte',
    'remix.config.js': 'gear',
    'angular.json': 'angular',
    '.angular-cli.json': 'angular',
    'nx.json': 'nx',
    'workspace.json': 'nx',
    'capacitor.config.json': 'capacitor',
    'capacitor.config.ts': 'capacitor',
    'ionic.config.json': 'ionic',
    'tauri.conf.json': 'tauri',

    // Linting & Formatting
    '.eslintrc': 'eslint',
    '.eslintrc.js': 'eslint',
    '.eslintrc.cjs': 'eslint',
    '.eslintrc.json': 'eslint',
    '.eslintrc.yml': 'eslint',
    'eslint.config.js': 'eslint',
    'eslint.config.mjs': 'eslint',
    '.prettierrc': 'prettier',
    '.prettierrc.js': 'prettier',
    '.prettierrc.json': 'prettier',
    '.prettierrc.yml': 'prettier',
    'prettier.config.js': 'prettier',
    'prettier.config.cjs': 'prettier',
    '.stylelintrc': 'stylelint',
    '.stylelintrc.js': 'stylelint',
    '.stylelintrc.json': 'stylelint',
    'stylelint.config.js': 'stylelint',
    'biome.json': 'biome',
    'biome.jsonc': 'biome',
    '.oxlintrc.json': 'oxlint',
    'knip.json': 'knip',
    'knip.jsonc': 'knip',

    // CSS frameworks & tools
    'tailwind.config.js': 'tailwind',
    'tailwind.config.ts': 'tailwind',
    'tailwind.config.cjs': 'tailwind',
    'postcss.config.js': 'postcss',
    'postcss.config.cjs': 'postcss',
    '.postcssrc': 'postcss',
    'unocss.config.js': 'unocss',
    'unocss.config.ts': 'unocss',
    'uno.config.js': 'unocss',
    'panda.config.js': 'panda',
    'panda.config.ts': 'panda',

    // CI/CD
    '.gitlab-ci.yml': 'gitlab',
    'jenkinsfile': 'jenkins',
    '.travis.yml': 'gear',
    'appveyor.yml': 'gear',
    'azure-pipelines.yml': 'azure',
    'netlify.toml': 'netlify',
    'vercel.json': 'vercel',
    '.vercelignore': 'vercel',
    'render.yaml': 'gear',
    'railway.json': 'gear',
    'fly.toml': 'gear',
    'pulumi.yaml': 'pulumi',

    // Docker
    'dockerfile': 'docker',
    'dockerfile.dev': 'docker',
    'dockerfile.prod': 'docker',
    'docker-compose.yml': 'docker',
    'docker-compose.yaml': 'docker',
    'docker-compose.dev.yml': 'docker',
    'docker-compose.prod.yml': 'docker',
    'earthfile': 'earthfile',

    // Testing
    'jest.config.js': 'jest',
    'jest.config.ts': 'jest',
    'jest.config.mjs': 'jest',
    'jest.config.cjs': 'jest',
    'jest.setup.js': 'jest',
    'cypress.config.js': 'cypress',
    'cypress.config.ts': 'cypress',
    'cypress.json': 'cypress',
    'playwright.config.js': 'gear',
    'playwright.config.ts': 'gear',

    // Database & ORM
    'prisma.schema': 'prisma',
    'schema.prisma': 'prisma',
    'drizzle.config.js': 'drizzle',
    'drizzle.config.ts': 'drizzle',

    // Cloud & Services
    'firebase.json': 'firebase',
    '.firebaserc': 'firebase',
    'supabase.json': 'supabase',
    'cloudflare.json': 'cloudflare-workers',
    'wrangler.toml': 'cloudflare-workers',

    // Documentation & Markdown
    'readme': 'markdown',
    'readme.md': 'markdown',
    'readme.txt': 'text',
    'changelog': 'markdown',
    'changelog.md': 'markdown',
    'contributing': 'markdown',
    'contributing.md': 'markdown',
    'license': 'license',
    'license.md': 'license',
    'license.txt': 'license',
    'authors': 'text',
    'contributors': 'text',

    // Other config files
    'makefile': 'gear',
    'cmake.txt': 'cmake',
    'cmakelists.txt': 'cmake',
    'vagrantfile': 'gear',
    'procfile': 'gear',
    '.nvmrc': 'node',
    '.node-version': 'node',
    '.npmrc': 'npm',
    '.browserslistrc': 'gear',
    'browserslist': 'gear',
    'turbo.json': 'turborepo',
    '.storybook': 'storybook',
    'mdx.config.js': 'mdx',
    'contentlayer.config.js': 'contentlayer',
    'contentlayer.config.ts': 'contentlayer',
    'orval.config.js': 'orval',
    'orval.config.ts': 'orval',
    'sanity.config.js': 'sanity',
    'sanity.config.ts': 'sanity',
    'keystatic.config.js': 'keystatic',
    'keystatic.config.ts': 'keystatic',
    'lunaria.config.json': 'lunaria',
    'docusaurus.config.js': 'docusaurus',
    'markdoc.config.js': 'markdoc',
    'fresh.config.ts': 'fresh',
    'dune': 'dune',
    '.clasprc.json': 'gear',
    'claude.json': 'claude',
    'claude.yaml': 'claude',
    '.claude': 'claude',
    'bruno.json': 'bruno',
    'laravel': 'laravel',
    'artisan': 'laravel',
    'composer.json': 'php',
    'composer.lock': 'php',
    'go.mod': 'go',
    'go.sum': 'go',
    'cargo.toml': 'rust',
    'cargo.lock': 'rust',
    'gemfile': 'ruby',
    'gemfile.lock': 'ruby',
    'rakefile': 'ruby',
    'podfile': 'swift',
    'requirements.txt': 'python',
    'pipfile': 'python',
    'pipfile.lock': 'python',
    'poetry.lock': 'python',
    'pyproject.toml': 'python',
    'setup.py': 'python',
    'manifest.toml': 'rust',
    'build.gradle': 'gradle',
    'settings.gradle': 'gradle',
    'build.sbt': 'sbt',
    'mix.exs': 'elixir',
};

// Pattern-based matching (for files like *.test.ts, *.spec.js, etc.)
export const filePatternMap: Array<{ pattern: RegExp; icon: string }> = [
    // Test files
    { pattern: /\.test\.(ts|tsx)$/i, icon: 'ts-test' },
    { pattern: /\.spec\.(ts|tsx)$/i, icon: 'ts-test' },
    { pattern: /\.test\.(js|jsx)$/i, icon: 'js-test' },
    { pattern: /\.spec\.(js|jsx)$/i, icon: 'js-test' },
    { pattern: /\.test\..*$/i, icon: 'gear' },
    { pattern: /\.spec\..*$/i, icon: 'gear' },

    // TypeScript declaration files
    { pattern: /\.d\.ts$/i, icon: 'dts' },
    { pattern: /\.d\.mts$/i, icon: 'dts' },
    { pattern: /\.d\.cts$/i, icon: 'dts' },

    // Config files
    { pattern: /\.config\.(js|ts|mjs|cjs)$/i, icon: 'gear' },
    { pattern: /\.conf$/i, icon: 'gear' },
    { pattern: /\.ini$/i, icon: 'gear' },

    // Docker
    { pattern: /^dockerfile/i, icon: 'docker' },
    { pattern: /\.dockerfile$/i, icon: 'docker' },

    // Database
    { pattern: /\.prisma$/i, icon: 'prisma' },
    { pattern: /\.sql$/i, icon: 'database' },

    // GraphQL
    { pattern: /\.(graphql|gql)$/i, icon: 'graphql' },

    // Angular specific
    { pattern: /\.component\.(ts|js)$/i, icon: 'angular-component' },
    { pattern: /\.service\.(ts|js)$/i, icon: 'angular-service' },
    { pattern: /\.module\.(ts|js)$/i, icon: 'angular-module' },
    { pattern: /\.directive\.(ts|js)$/i, icon: 'angular-directive' },
    { pattern: /\.pipe\.(ts|js)$/i, icon: 'angular-pipe' },
    { pattern: /\.guard\.(ts|js)$/i, icon: 'angular-guard' },

    // NestJS specific
    { pattern: /\.controller\.(ts|js)$/i, icon: 'nest-controller' },
    { pattern: /\.middleware\.(ts|js)$/i, icon: 'nest-middleware' },
    { pattern: /\.decorator\.(ts|js)$/i, icon: 'nest-decorator' },

    // Redux
    { pattern: /\.actions?\.(ts|js)$/i, icon: 'redux-actions' },
    { pattern: /\.reducer\.(ts|js)$/i, icon: 'redux-reducer' },
    { pattern: /\.selector\.(ts|js)$/i, icon: 'redux-selector' },
    { pattern: /\.effects?\.(ts|js)$/i, icon: 'redux-effects' },
    { pattern: /\.facade\.(ts|js)$/i, icon: 'redux-facade' },

    // ReScript
    { pattern: /\.resi$/i, icon: 'rescript-interface' },
    { pattern: /\.res$/i, icon: 'rescript' },

    // Svelte
    { pattern: /\.svelte\.(ts|js)$/i, icon: 'svelte-ts' },

    // React
    { pattern: /\.(jsx|tsx)$/i, icon: 'react' },

    // Markdown variants
    { pattern: /\.mdx$/i, icon: 'mdx' },
    { pattern: /\.svx$/i, icon: 'svx' },
    { pattern: /\.jmd$/i, icon: 'julia-markdown' },

    // Templates
    { pattern: /\.antlers\.(html|php)$/i, icon: 'statamic-antlers' },

    // Environment files
    { pattern: /^\.env(\.|$)/i, icon: 'gear' },

    // Ignore files
    { pattern: /ignore$/i, icon: 'ignore' },

    // Lock files
    { pattern: /\.lock(b)?$/i, icon: 'lock' },
    { pattern: /-lock\.(json|yaml)$/i, icon: 'lock' },

    // License files
    { pattern: /^licen[cs]e/i, icon: 'license' },

    // Vanilla Extract
    { pattern: /\.css\.(ts|js)$/i, icon: 'vanilla-extract' },
];

// Folder name to icon mapping
export const folderNameMap: IconMapping = {
    // Version control
    '.github': 'folder-github',
    '.gitlab': 'folder-gitlab',
    '.git': 'folder-blue',

    // IDE & editors
    '.vscode': 'folder-vscode',
    '.idea': 'folder-orange-code',

    // Package managers & dependencies
    'node_modules': 'folder-node-modules',
    'bower_components': 'folder-orange',
    'vendor': 'folder-gray',

    // Source & build directories
    'src': 'folder-src',
    'source': 'folder-src',
    'sources': 'folder-src',
    'dist': 'folder-build',
    'build': 'folder-build',
    'out': 'folder-build',
    'output': 'folder-build',
    'target': 'folder-target',
    'bin': 'folder-gray',
    'lib': 'folder-utils',
    'libs': 'folder-utils',
    'packages': 'folder-gray',

    // Public & assets
    'public': 'folder-orange',
    'static': 'folder-orange',
    'assets': 'folder-assets',
    'images': 'folder-images',
    'img': 'folder-images',
    'icons': 'folder-images',
    'media': 'folder-images',
    'fonts': 'folder-fonts',
    'styles': 'folder-sass',
    'css': 'folder-sass',
    'sass': 'folder-sass',
    'scss': 'folder-sass',

    // Application structure
    'app': 'folder-app',
    'pages': 'folder-layout',
    'routes': 'folder-router',
    'views': 'folder-layout',
    'layouts': 'folder-layout',
    'templates': 'folder-layout',
    'components': 'folder-react',
    'widgets': 'folder-react',
    'screens': 'folder-layout',

    // API & services
    'api': 'folder-blue-code',
    'services': 'folder-services',
    'graphql': 'folder-graphql',
    'grpc': 'folder-blue-code',
    'rest': 'folder-blue-code',

    // State management
    'store': 'folder-blue',
    'stores': 'folder-blue',
    'state': 'folder-blue',
    'redux': 'folder-blue',
    'actions': 'folder-actions',
    'reducers': 'folder-reducer',
    'selectors': 'folder-selector',
    'effects': 'folder-effects',
    'facades': 'folder-facade',

    // Data & models
    'models': 'folder-models',
    'entities': 'folder-models',
    'schemas': 'folder-database',
    'migrations': 'folder-database',
    'seeders': 'folder-database',
    'fixtures': 'folder-database',
    'database': 'folder-database',
    'db': 'folder-database',
    'data': 'folder-database',
    'prisma': 'folder-prisma',
    'drizzle': 'folder-drizzle',
    'mongo': 'folder-mongo',
    'mongodb': 'folder-mongo',
    'redis': 'folder-redis',
    'supabase': 'folder-supabase',

    // Testing
    'test': 'folder-green',
    'tests': 'folder-green',
    '__tests__': 'folder-green',
    'spec': 'folder-green',
    'specs': 'folder-green',
    'e2e': 'folder-green',
    'cypress': 'folder-cypress',
    '__mocks__': 'folder-green',
    '__fixtures__': 'folder-green',

    // Configuration
    'config': 'folder-config',
    'configs': 'folder-config',
    'configuration': 'folder-config',
    'settings': 'folder-config',
    '.config': 'folder-config',

    // Utilities & helpers
    'utils': 'folder-utils',
    'utilities': 'folder-utils',
    'helpers': 'folder-helpers',
    'common': 'folder-shared',
    'shared': 'folder-shared',
    'core': 'folder-core',
    'base': 'folder-core',

    // Documentation
    'docs': 'folder-documents',
    'doc': 'folder-documents',
    'documentation': 'folder-documents',

    // Framework specific
    'hooks': 'folder-hooks',
    'composables': 'folder-hooks',
    'directives': 'folder-purple',
    'filters': 'folder-purple',
    'pipes': 'folder-pipes',
    'guards': 'folder-green',
    'interceptors': 'folder-interceptors',
    'middlewares': 'folder-middleware',
    'middleware': 'folder-middleware',
    'providers': 'folder-providers',
    'resolvers': 'folder-graphql',
    'controllers': 'folder-blue-code',
    'modules': 'folder-modules',
    'plugins': 'folder-purple',
    'extensions': 'folder-purple',

    // Types & interfaces
    'types': 'folder-purple',
    'typings': 'folder-purple',
    '@types': 'folder-purple',
    'interfaces': 'folder-interfaces',
    'contracts': 'folder-interfaces',
    'definitions': 'folder-purple',

    // Internationalization
    'i18n': 'folder-i18n',
    'locales': 'folder-i18n',
    'translations': 'folder-i18n',
    'lang': 'folder-i18n',
    'languages': 'folder-i18n',

    // Cloud & deployment
    'docker': 'folder-docker',
    '.docker': 'folder-docker',
    'kubernetes': 'folder-blue',
    'k8s': 'folder-blue',
    'terraform': 'folder-orange',
    'ansible': 'folder-orange',
    'firebase': 'folder-firebase',
    'aws': 'folder-aws',
    'azure': 'folder-azure',
    'vercel': 'folder-vercel',
    'netlify': 'folder-orange',

    // Mobile
    'android': 'folder-android',
    'ios': 'folder-ios',
    'mobile': 'folder-orange',
    'expo': 'folder-expo',

    // Framework folders
    'angular': 'folder-angular',
    'react': 'folder-react',
    'vue': 'folder-purple',
    'svelte': 'folder-orange',
    'next': 'folder-orange',
    'nuxt': 'folder-green',
    'gatsby': 'folder-purple',
    'remix': 'folder-blue',

    // Build & tooling
    'scripts': 'folder-js',
    'tasks': 'folder-js',
    'tools': 'folder-orange',
    'generators': 'folder-orange',
    'nx': 'folder-purple',
    'gradle': 'folder-gradle',

    // Other
    'constants': 'folder-constants',
    'enums': 'folder-constants',
    'context': 'folder-context',
    'contexts': 'folder-context',
    'mail': 'folder-mail',
    'emails': 'folder-mail',
    'jobs': 'folder-blue',
    'workers': 'folder-blue',
    'queues': 'folder-blue',
    'events': 'folder-purple',
    'listeners': 'folder-purple',
    'observers': 'folder-purple',
    'policies': 'folder-green',
    'rules': 'folder-green',
    'validators': 'folder-green',
    'decorators': 'folder-purple',
    'adapters': 'folder-blue',
    'repositories': 'folder-database',
    'nginx': 'folder-nginx',
    'apache': 'folder-orange',
    'logs': 'folder-gray',
    'temp': 'folder-gray',
    'tmp': 'folder-gray',
    'cache': 'folder-gray',
    '.cache': 'folder-gray',
    'backup': 'folder-gray',
    'backups': 'folder-gray',
    'uploads': 'folder-images',
    'downloads': 'folder-gray',
    'bruno': 'folder-bruno',
    'claude': 'folder-claude',
    'cursor': 'folder-cursor',
    'tauri': 'folder-tauri',
    'tina': 'folder-tina',
};

/**
 * Get icon name for a file
 */
export function getFileIcon(fileName: string): string {
    const lowerFileName = fileName.toLowerCase();

    // Check exact filename match first
    if (fileNameMap[lowerFileName]) {
        return fileNameMap[lowerFileName];
    }

    // Check pattern matches
    for (const { pattern, icon } of filePatternMap) {
        if (pattern.test(lowerFileName)) {
            return icon;
        }
    }

    // Check file extension (try multiple dot splits for files like .d.ts)
    const parts = lowerFileName.split('.');

    // Try compound extensions first (e.g., .d.ts, .test.js)
    if (parts.length > 2) {
        const compoundExt = parts.slice(-2).join('.');
        if (fileExtensionMap[compoundExt]) {
            return fileExtensionMap[compoundExt];
        }
    }

    // Try single extension
    if (parts.length > 1) {
        const ext = parts[parts.length - 1];
        if (fileExtensionMap[ext]) {
            return fileExtensionMap[ext];
        }
    }

    // Default icon
    return 'document';
}

/**
 * Get icon name for a folder
 */
export function getFolderIcon(folderName: string): string {
    const lowerFolderName = folderName.toLowerCase();
    return folderNameMap[lowerFolderName] || 'folder-blue';
}