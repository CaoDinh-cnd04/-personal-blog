# Contributing to Personal Blog & Portfolio

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Keep discussions on-topic

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: How to reproduce the issue
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, Node version, etc.
6. **Screenshots**: If applicable

### Suggesting Features

Feature requests are welcome! Please include:

1. **Use Case**: Why this feature would be useful
2. **Description**: Detailed explanation of the feature
3. **Examples**: Similar implementations or mockups
4. **Alternatives**: Other solutions you've considered

### Pull Requests

1. **Fork the Repository**
   ```bash
   git clone https://github.com/CaoDinh-cnd04/personal-blog.git
   cd personal-blog
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test Your Changes**
   ```bash
   npm run dev      # Test locally
   npm run build    # Test production build
   npm run preview  # Preview production build
   ```

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve bug in component"
   ```

   Use conventional commit messages:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting, etc.)
   - `refactor:` Code refactoring
   - `test:` Adding or updating tests
   - `chore:` Maintenance tasks

6. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   
   Then create a Pull Request on GitHub with:
   - Clear title and description
   - Reference any related issues
   - Screenshots/GIFs for UI changes
   - List of changes made

## Development Guidelines

### Code Style

- Use functional components and hooks
- Use descriptive variable names
- Keep components small and focused
- Use ES6+ features
- Follow existing file structure

### Component Structure

```jsx
import { useState } from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue)

  // Handler functions
  const handleClick = () => {
    // ...
  }

  return (
    <div>
      {/* JSX */}
    </div>
  )
}

MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
}

export default MyComponent
```

### File Naming

- Components: PascalCase (e.g., `MyComponent.jsx`)
- Utilities: camelCase (e.g., `helperFunction.js`)
- Pages: PascalCase (e.g., `Home.jsx`)
- Styles: kebab-case (e.g., `my-styles.css`)

### Folder Structure

```
src/
├── api/           # API integrations
├── components/    # Reusable components
├── contexts/      # React contexts
├── pages/         # Page components
├── utils/         # Utility functions
├── hooks/         # Custom hooks
└── assets/        # Static assets
```

### CSS/Styling

- Use Tailwind CSS utility classes
- Create custom classes in `index.css` for repeated patterns
- Use semantic class names
- Keep responsive design in mind

### Performance

- Use code splitting with `React.lazy()`
- Optimize images before adding
- Avoid unnecessary re-renders
- Use `useMemo` and `useCallback` when appropriate

### Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

## Project-Specific Guidelines

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`
4. Add to sitemap (`public/sitemap.xml`)
5. Test all links and navigation

### Modifying GitHub Integration

- Test with different GitHub usernames
- Handle API rate limiting
- Add error handling
- Update documentation

### Blog Changes

- Follow the blog structure in `BLOG_GUIDE.md`
- Maintain backward compatibility
- Test markdown rendering
- Update documentation

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code builds without errors (`npm run build`)
- [ ] All pages load correctly
- [ ] No console errors or warnings
- [ ] Mobile responsive
- [ ] Dark/Light mode works
- [ ] Links work correctly
- [ ] Forms submit properly
- [ ] Images load and have alt text
- [ ] Code is properly formatted
- [ ] Documentation is updated

## Questions?

If you have questions:
- Open an issue with the "question" label
- Check existing issues and discussions
- Review the documentation

## Recognition

Contributors will be:
- Listed in the project README
- Mentioned in release notes
- Appreciated in commit messages

Thank you for contributing! 🎉

