# Documentation for KDRS Search & View

This repo contains a Jekyll page with documentation for KDRS Search & View.

## Development

To set up your environment to develop this theme: fork this repo, the run `bundle install` from the root directory.

A modern [devcontainer configuration](https://code.visualstudio.com/docs/remote/containers) for VSCode is included.

Your theme is set up just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When this theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be included in the gem.

## Branches

The GitHub workflow at `.github/workflows/kdrs_multi_version_build_deploy.yml` is configured to automatically deploy the latest version, determined by the highest semantic version number in the branch names. For example, if branches `1.4` and `2.1` exist, `2.1` will be deployed to the root. While branches are in development, they will therefore be prefixed like `develop/x.y` so they will not be deployed as the main page before they are ready. Branches starting with `develop/` will be deployed still and manually accessible by visiting the url `https://kdrs-sa.github.io/kdrs-search-and-view-docs/develop/<yourbranchname>`, but not visible in the version selector.

All branches on the format `x.y` will be available in the version selector on the page, so the users can view documentation for older versions.