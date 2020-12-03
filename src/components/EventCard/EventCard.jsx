import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import EventIcon from '@material-ui/icons/Event';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import GoButton from '../../common/GoButton';
import ReturnButton from '../../common/ReturnButton';

const blockWidth = 728;
const white = '#FFFFFF';
const boxShadow = '0px 9px 111px rgba(0, 0, 0, 0.34),' +
    ' 0px 3.75998px 46.3731px rgba(0, 0, 0, 0.24441),' +
    ' 0px 2.01027px 24.7933px rgba(0, 0, 0, 0.202676),' +
    ' 0px 1.12694px 13.8989px rgba(0, 0, 0, 0.17),' +
    ' 0px 0.598509px 7.38161px rgba(0, 0, 0, 0.137324),' +
    ' 0px 0.249053px 3.07165px rgba(0, 0, 0, 0.0955895);';

const MainEventCard = styled.div`
    display: flex;
    justify-content: center;
`;

const AboutEvent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0 0 20px;
    & > div {
    box-shadow: ${boxShadow}
    }
`;

const EventPhoto = styled.div`
    width: ${blockWidth}px;
    height: 345px;
    margin-bottom: 20px;
    position: relative;
`;

const EventDescription = styled.div`
    height: 199px;
    width: ${blockWidth}px;
    background-color: ${white};
    margin: 5px 0 30px 0;
`;

const EventTimeAndDate = styled.div`
    height: 199px;
    width: ${blockWidth}px;
    background-color: ${white};
    margin-bottom: 40px;
`;

const EventVizitors = styled.div`
    height: 70px;
    width: ${blockWidth}px;
    background-color: ${white};
    margin-bottom: 40px;
`;

const StyledImg = styled.img`
    width: ${blockWidth}px;
    height: 345px;
`;

const SimilarEvent = styled.div``;

const Title = styled.div`
    width: 90px;
    height: 20px;
    font-weight: 900;
    margin: 35px 0 0 57px;
`;

const Description = styled.div`
    width: 613px;
    height: 80px;
    font-weight: 300;
    margin: 35px 0 20px 57px;
`;

const DateAndPlace = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: row;
`;

const DateAndPlaceBlock = styled.div`
    margin: 15px 0 0 57px;
    & > div {
        margin: 20px;
    }
`;

const Info = styled.div`
    margin: 5px 5px 5px 15px;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    && {
        box-shadow: none;
    }
    & > div {
        margin: 0 15px 15px 15px;
    }
`;

const EventCard = props => {

    const { photo, author, description, category, start, finish, place, follow, unfollow, followed, eventId } = props;
    const dayOfEvent = moment(start).format('L:');
    const timeOfEvent = moment(start).format('hh:mm');
    const timeOfEndEvent = moment(finish).format('hh:mm');

    const ApplyButton = () => {
        return (
            <div>
                {
                    followed ? (
                        <GoButton
                            text="Не пойду"
                            handler={() => {
                                unfollow(eventId);
                            }}
                        />
                    ) : (
                        <GoButton
                            text="Пойду"
                            handler={() => {
                                follow(eventId);
                            }}
                            eventId={eventId}
                        />
                    )
                }
            </div>
        );
    };

    return (
        <MainEventCard>
            <SimilarEvent />
            <AboutEvent>
                <EventPhoto>
                    <StyledImg src={`${photo}`} alt="EventPhoto" />
                    <ButtonWrapper>
                        <ApplyButton />
                    </ButtonWrapper>
                </EventPhoto>
                <EventDescription>
                    <Title>
                        {category}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                </EventDescription>
                <EventTimeAndDate>
                    <DateAndPlaceBlock>
                        <DateAndPlace>
                            <QueryBuilderIcon style={{ fontSize: 30 }} />
                            <Info>
                                {timeOfEvent}
                                {' - '}
                                {timeOfEndEvent}
                            </Info>
                        </DateAndPlace>
                        <DateAndPlace>
                            <EventIcon style={{ fontSize: 30 }} />
                            <Info>
                                {dayOfEvent}
                            </Info>
                        </DateAndPlace>
                        <DateAndPlace>
                            <PlaceOutlinedIcon style={{ fontSize: 30 }} />
                            <Info>
                                {place}
                            </Info>
                        </DateAndPlace>
                    </DateAndPlaceBlock>
                </EventTimeAndDate>
                <EventVizitors>
                    {author.name}
                </EventVizitors>
                <Navigation>
                    <ReturnButton />
                    <ApplyButton />
                </Navigation>
            </AboutEvent>
        </MainEventCard>
    );
};
export default EventCard;
