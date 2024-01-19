import { Link } from 'react-router-dom';
import { customStyled } from 'src/assets/utils/stitches';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SidebarStyleContainer = customStyled('aside', {
  '*:hover': {
    backgroundColor: 'transparent !important'
  },

  aside: {
    border: '0 !important'
  }

});

interface SidebarLink {
  label: string;
  path: string;
}

interface SidebarSection {
  label: string;
  links: SidebarLink[];
}

type GlobalSidebar = SidebarSection[];

const globalSideBar: GlobalSidebar = [
  {
    label: 'Conceitos',
    links: [
      {
        label: 'O que são Apontamentos',
        path: '/tutorials/o-que-sao-apontamentos',
      },
    ],
  },
  {
    label: 'Explorando o GAT Core',
    links: [
      {
        label: 'Como criar projetos',
        path: '/tutorials/como-criar-projetos',
      },
    ],
  },
];


function SidebarSectionRender({
  sidebarSection,
}: {
  sidebarSection: SidebarSection;
}) {
  return (
    <SubMenu label={sidebarSection.label}>
      {sidebarSection.links.map((link) => (
        <MenuItem component={<Link to={link.path}/>}>{link.label}</MenuItem>
      ))}
    </SubMenu>
  );
}

export default function TutorialsGlobalSidebar() {
  return (
    <SidebarStyleContainer id="global-sidebar">
      <Menu>
          <Sidebar>
            {globalSideBar.map((section) => (
              <SidebarSectionRender sidebarSection={section} />
            ))}
          </Sidebar>
      </Menu>
    </SidebarStyleContainer>
  );
}
