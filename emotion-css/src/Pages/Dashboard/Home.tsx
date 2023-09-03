import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Typography from "../../Components/Atoms/Typography";
import Navbar from "../../Components/Molecules/Navbar";
import InputSearch from "../../Components/Atoms/InputSearch";
import Dropdown from "../../Components/Atoms/Dropdown";
import CardComponent from "../../Components/Atoms/Card";
import {
  FiCode,
  FiCodepen,
  FiCommand,
  FiDatabase,
  FiGlobe,
} from "react-icons/fi";
import { BiMobile } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import Divider from "../../Components/Atoms/Divider";

import image1 from "../../Assets/Images/image1.png";
import image2 from "../../Assets/Images/image2.png";
import image3 from "../../Assets/Images/image3.png";
import image4 from "../../Assets/Images/image4.png";
import listImage1 from "../../Assets/Images/listImage1.png";
import listImage2 from "../../Assets/Images/listImage2.png";
import listImage3 from "../../Assets/Images/listImage3.png";
import listImage4 from "../../Assets/Images/listImage4.png";
import Carousel from "../../Components/Molecules/Carousel";

interface DashboardProps {
  label: string;
  listItems?: string[];
}

const DashboardStyle = css`
  background: #f8f8f8;
  height: 100vh;
  overflow: auto;
`;

const DashboardContentStyle = css`
  width: 72rem;
  max-width: 100%;
  margin: auto;
`;

const DashboardNavStyle = css`
  background: #fff;
`;

const DashboardTopStyle = css`
  background: #fff;
  padding-bottom: 9rem;
`;

const DashboardHeaderWrapperStyle = css`
  width: 49rem;
  maxwidth: 100%;
  margin: auto;
  padding: 0;
`;

const DashboardHeaderStyle = css`
  text-align: center;
`;

const DashboardSearchStyle = css`
  padding: 2rem 0.5rem 1.5rem;
`;

const DashboardDropdownWrapperStyle = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const DashboardDropdownStyle = css`
  padding: 0.5rem;
`;

const CategoriesStyle = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > div {
    width: 15rem;
    margin: 1.4rem;
    padding: 4rem 1rem;
    text-align: center;
  }
`;

const CarouselWrapperStyle = css`
  padding: 2rem 0;
`;

const CategoriesWrapperStyle = css`
  margin-top: -7rem;
  padding-bottom: 2rem;
`;

const CarouselTitleStyle = css`
  text-align: center;
  padding-bottom: 1.5rem;
`;

const ListWrapperStyle = css`
  padding: 2rem 0;
  & > div > div {
    background: #f8f8f8;
    box-shadow: none;
    padding: 0;
    width: 15.625rem;
  }
`;

const ListItemStyle = css`
  display: flex;
  padding-top: 1.5rem;
  justify-content: space-between;
`;
const ListItemImageWrapperStyle = css`
  width: 100%;
  height: 100px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const ListItemImageStyle = css`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ViewMoreWrapperStyle = css`
  display: flex;
  justify-content: end;
  padding-top: 1rem;
`;

const ViewMoreStyle = css`
  text-decoration: none;
  color: #0b93df;
  border-bottom: 1px dashed currentColor;
`;

const DashboardWrapper = styled.div`
  ${DashboardStyle}
`;

const DashboardContent = styled.div`
  ${DashboardContentStyle}
`;

const DashboardTop = styled.div`
  ${DashboardTopStyle}
`;

const DashboardNav = styled.div`
  ${DashboardNavStyle}
`;

const DashboardHeaderWrapper = styled.div`
  ${DashboardHeaderWrapperStyle}
`;

const DashboardHeader = styled.div`
  ${DashboardHeaderStyle}
`;

const DashboardSearch = styled.div`
  ${DashboardSearchStyle}
`;

const DashboardDropdownWrapper = styled.div`
  ${DashboardDropdownWrapperStyle}
`;

const DashboardDropdown = styled.div`
  ${DashboardDropdownStyle}
`;

const CategoriesWrapper = styled.div`
  ${CategoriesWrapperStyle}
`;

const Categories = styled.div`
  ${CategoriesStyle}
`;

const CarouselWrapper = styled.div`
  ${CarouselWrapperStyle}
`;

const CarouselTitle = styled.div`
  ${CarouselTitleStyle}
`;

const ListWrapper = styled.div`
  ${ListWrapperStyle}
`;
const ListItem = styled.div`
  ${ListItemStyle}
`;
const ListItemImageWrapper = styled.div`
  ${ListItemImageWrapperStyle}
`;

const ListItemImage = styled.img`
  ${ListItemImageStyle}
`;
const ViewMoreWrapper = styled.div`
  ${ViewMoreWrapperStyle}
`;
const ViewMore = styled.a`
  ${ViewMoreStyle}
`;

const Dashboard: React.FC<DashboardProps> = () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  const items = [
    {
      id: 1,
      name: "Item 1",
      image: image1,
    },
    {
      id: 2,
      name: "Item 2",
      image: image2,
    },
    {
      id: 3,
      name: "Item 3",
      image: image3,
    },
    {
      id: 4,
      name: "Item 4",
      image: image4,
    },
    {
      id: 5,
      name: "Item 1",
      image: image1,
    },
    {
      id: 6,
      name: "Item 2",
      image: image2,
    },
    {
      id: 7,
      name: "Item 3",
      image: image3,
    },
    {
      id: 8,
      name: "Item 4",
      image: image4,
    },
  ];
  return (
    <DashboardWrapper>
      <DashboardTop>
        <DashboardNav>
          <Navbar showInput={false} showBreadcrumb={false} />
        </DashboardNav>
        <DashboardHeaderWrapper>
          <DashboardHeader>
            <Typography
              variant="h4"
              text="Hello, how may I help you ?"
              color="#343434"
              fontWeight="bold"
            />
          </DashboardHeader>
          <DashboardSearch>
            <InputSearch
              isSearchIcon
              placeHolder="Search for Tech Digest, Hard Problems, Blogs, TL Articles…"
            />
          </DashboardSearch>
          <DashboardDropdownWrapper>
            <DashboardDropdown>
              <Dropdown options={options} placeholder="Categories" />
            </DashboardDropdown>

            <DashboardDropdown>
              <Dropdown options={options} placeholder="Tech" />
            </DashboardDropdown>

            <DashboardDropdown>
              <Dropdown options={options} placeholder="Product Name" />
            </DashboardDropdown>

            <DashboardDropdown>
              <Dropdown options={options} placeholder="Tags" />
            </DashboardDropdown>
          </DashboardDropdownWrapper>
        </DashboardHeaderWrapper>
      </DashboardTop>
      <DashboardContent>
        <CategoriesWrapper>
          <Categories>
            <CardComponent>
              <FiCode size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="Languages" />
            </CardComponent>
            <CardComponent>
              <FiGlobe size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="Web Frameworks" />
            </CardComponent>
            <CardComponent>
              <FiDatabase size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="Database" />
            </CardComponent>
            <CardComponent>
              <FiCodepen size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="Architecture & Deisgn" />
            </CardComponent>
          </Categories>
          <Categories>
            <CardComponent>
              <FiCommand size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="BigData" />
            </CardComponent>
            <CardComponent>
              <BiMobile size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="DevOps" />
            </CardComponent>
            <CardComponent>
              <FiCodepen size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="UX" />
            </CardComponent>
            <CardComponent>
              <RiUserSettingsLine size="30" color="#0B93DF" />
              <Typography variant="subtitle" text="QA" />
            </CardComponent>
          </Categories>
        </CategoriesWrapper>
        <Divider />
        <CarouselWrapper>
          <CarouselTitle>
            <Typography
              variant="subtitle"
              fontWeight="bold"
              text="Popular Tech Digest"
              color="#343434"
            />
          </CarouselTitle>
          <Carousel
            items={items}
            itemCounts={[{ desktop: 4, tablet: 2, mobile: 1 }]}
          />
        </CarouselWrapper>
        <Divider />
        <ListWrapper>
          <Typography
            variant="subtitle"
            fontWeight="bold"
            text="Bookmarked"
            color="#343434"
          />
          <ListItem>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage1} alt={listImage1} />
              </ListItemImageWrapper>
              <div>
                <Typography
                  variant="caption"
                  text="How To Start Automation Issue With Cypress Quickly?"
                  color="#343434"
                  fontWeight="bold"
                />
              </div>
              <div>
                <Typography
                  variant="caption"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                  color="#343434"
                />
              </div>
            </CardComponent>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage2} alt={listImage2} />
              </ListItemImageWrapper>
              <div>
                <Typography
                  variant="caption"
                  text="How To Start Automation Issue With Cypress Quickly?"
                  color="#343434"
                  fontWeight="bold"
                />
              </div>
              <div>
                <Typography
                  variant="caption"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                  color="#343434"
                />
              </div>
            </CardComponent>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage3} alt={listImage3} />
              </ListItemImageWrapper>
              <div>
                <Typography
                  variant="caption"
                  text="How To Start Automation Issue With Cypress Quickly?"
                  color="#343434"
                  fontWeight="bold"
                />
              </div>
              <div>
                <Typography
                  variant="caption"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                  color="#343434"
                />
              </div>
            </CardComponent>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage4} alt={listImage4} />
              </ListItemImageWrapper>
              <div>
                <Typography
                  variant="caption"
                  text="How To Start Automation Issue With Cypress Quickly?"
                  color="#343434"
                  fontWeight="bold"
                />
              </div>
              <div>
                <Typography
                  variant="caption"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                  color="#343434"
                />
              </div>
            </CardComponent>
          </ListItem>
          <ViewMoreWrapper>
            <ViewMore href="#">view more...</ViewMore>
          </ViewMoreWrapper>
        </ListWrapper>
        <Divider />
        <ListWrapper>
          <Typography
            variant="subtitle"
            fontWeight="bold"
            text="More for you"
            color="#343434"
          />
          <ListItem>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage1} alt={listImage1} />
              </ListItemImageWrapper>
            </CardComponent>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage2} alt={listImage2} />
              </ListItemImageWrapper>
            </CardComponent>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage3} alt={listImage3} />
              </ListItemImageWrapper>
            </CardComponent>
            <CardComponent>
              <ListItemImageWrapper>
                <ListItemImage src={listImage4} alt={listImage4} />
              </ListItemImageWrapper>
            </CardComponent>
          </ListItem>
        </ListWrapper>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
