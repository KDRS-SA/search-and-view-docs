/* Script below makes XML tags above links to their doc pages. Done in javascript because it is a big job to override the 'highlight' functionality */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code.language-xml').forEach(block => {
        block.innerHTML = block.innerHTML.replace(/&lt;\/?(\w+)([^&gt;]*?)&gt;/g, (match, p1, p2) =>
            `<a href="{{ site.baseurl }}/xml/${p1}" class="xml-tag-link">${match}</a>`);
    });
});