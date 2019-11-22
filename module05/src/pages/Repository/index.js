import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Filter, Pagination } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filter } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filter,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
      filter: 'all',
      page: 1,
    });
  }

  setFilter = e => {
    const filter = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      loading: true,
      filter,
    }));

    this.fetchIssues();
  };

  setPage = page => {
    this.setState(prevState => ({
      ...prevState,
      loading: true,
      page,
    }));

    this.fetchIssues();
  };

  fetchIssues = async () => {
    const { match } = this.props;
    const { filter, page } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filter,
        per_page: 5,
        page,
      },
    });

    this.setState(prevState => ({
      ...prevState,
      issues: issues.data,
      loading: false,
    }));
  };

  render() {
    const { repository, issues, loading, page, filter } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositorios</Link>

          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <Filter>
          <strong>
            <p>Issue Status</p>
          </strong>
          <select onChange={this.setFilter} value={filter}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </Filter>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Pagination>
          <button
            type="button"
            disabled={page === 1}
            onClick={() => this.setPage(page - 1)}
          >
            <strong>Anterior</strong>
          </button>
          <button type="button" onClick={() => this.setPage(page + 1)}>
            <strong>Próximo</strong>
          </button>
        </Pagination>
      </Container>
    );
  }
}
