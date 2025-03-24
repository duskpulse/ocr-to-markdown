# ocr-to-markdown

Convert screenshots or scanned PDFs to clean Markdown using a simple CLI.

Install (local)
```
npm install
npm link
```

CLI
```
ocr2md path/to/image.png -o notes.md
```

Goals
- Personal weekend project to scratch an itch: turn meeting photos into notes.
- Keep the stack tiny and hackable.

Roadmap
- [ ] Define basic CLI and data flow
- [ ] Support plain image input (PNG/JPG)
- [ ] Export headings, lists, code fences
- [ ] Optional table detection (stretch)

License
MIT for now. Might revisit later.
