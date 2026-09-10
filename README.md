# Site institucional da CodiDados

Site estático da [CodiDados Soluções](https://codidados.com.br/), construído com Hugo e publicado no GitHub Pages.

O projeto usa como base visual o tema [Hugo Up Business](https://github.com/writeonlycode/hugo-up-business), incorporado diretamente ao repositório e adaptado para a identidade e o conteúdo da CodiDados. Não há submodule nem dependência remota do tema durante o build.

## Pré-requisitos

- Hugo Extended 0.152.2 (mínimo suportado: 0.147.8)
- Node.js 22
- npm 10 ou versão compatível

Go não é necessário: o código do tema foi incorporado ao projeto e não utiliza Hugo Modules.

## Desenvolvimento local

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
hugo server
```

O site ficará disponível em `http://localhost:1313/`.

Para gerar o build de produção:

```bash
hugo --minify
```

O resultado será gravado em `public/`.

Também estão disponíveis:

```bash
npm run dev
npm run build
```

## Organização

```text
assets/
├── css/                 # Tailwind, estilos próprios e fontes
├── fonts/               # Fontes locais herdadas do tema
├── images/              # Logo e imagens processadas pelo Hugo
└── js/                  # Menu responsivo
config/_default/
└── menus.yaml           # Links do menu principal
content/
└── _index.md            # Metadados da página inicial
data/
├── company.yaml         # Identidade, textos institucionais e contato
├── services.yaml        # Serviços
├── projects.yaml        # Projetos e seus links
├── social.yaml          # GitHub, LinkedIn, blog e mensageiros
└── featured-posts.yaml  # Até três artigos cadastrados manualmente
layouts/                 # Templates Hugo adaptados
static/
├── CNAME                # Domínio personalizado
├── img/codidados-logo-email.png # URL preservada para assinaturas de e-mail
└── robots.txt
legacy-site/             # Cópia dos arquivos do site anterior
```

## Alteração de conteúdo

- Textos principais, diferenciais, seção sobre e e-mail: `data/company.yaml`
- Serviços: `data/services.yaml`
- Projetos e links relacionados: `data/projects.yaml`
- GitHub, LinkedIn, blog, Telegram e WhatsApp: `data/social.yaml`
- Artigos em destaque: `data/featured-posts.yaml`
- Menu: `config/_default/menus.yaml`
- Título, descrição, domínio e cores: `hugo.yaml`
- Logo do cabeçalho e rodapé: `assets/images/codidados-logo.png` (versão 2, recortada, em PNG transparente)
- Logo das assinaturas de e-mail: `static/img/codidados-logo-email.png`, publicado sem processamento em `/img/codidados-logo-email.png`. Preserve esse caminho para manter as assinaturas existentes funcionando.
- Ícones: `assets/images/codidados-symbol.png` (versão 3 centralizada em uma tela quadrada transparente); o Hugo gera os tamanhos de 32 e 180 px
- Compartilhamento social: `assets/images/codidados-social.png` (logo horizontal sobre fundo branco, 600 × 315 px)

Campos de URL vazios são intencionais e não são exibidos. Preencha os links reais em `data/social.yaml` e `data/projects.yaml` quando estiverem disponíveis.

## Publicação

O workflow `.github/workflows/deploy.yml` é executado em pushes para `main` e também pode ser iniciado manualmente. Ele:

1. instala Hugo Extended;
2. configura Node.js;
3. executa `npm ci`;
4. gera o site com `hugo --minify`;
5. envia `public/` ao GitHub Pages.

No repositório GitHub, a origem do Pages deve estar configurada como **GitHub Actions**. O domínio personalizado continua definido em `static/CNAME`, que é copiado pelo Hugo para o artefato publicado. A opção **Enforce HTTPS** deve permanecer habilitada nas configurações do Pages.

## Preservação e migração

Foram reaproveitados:

- logotipos existentes em `img/`, copiados para o pipeline de assets;
- domínio `codidados.com.br`;
- e-mail `contato@codidados.com.br`.

O HTML e o CSS anteriores foram transferidos sem alteração para `legacy-site/`, junto com cópias das imagens e do antigo `CNAME`. A antiga pasta `img/` da raiz foi removida; a imagem da assinatura de e-mail é mantida em `static/img/` para preservar sua URL pública. A nova versão substitui a página única manual por templates Hugo, conteúdo centralizado em YAML, Tailwind e publicação por GitHub Actions.

## Créditos

Baseado no tema Hugo Up Business, de Iago Bozza/writeonlycode, licenciado sob MIT. A licença original está em `licenses/hugo-up-business-LICENSE`.
